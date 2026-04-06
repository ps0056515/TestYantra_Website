"use client";

import { useMemo, useState } from "react";
import type { RoiDefaults } from "@/content/site";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

const numberFmt = new Intl.NumberFormat("en-US");
const moneyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatMoney(n: number) {
  return moneyFmt.format(n);
}

export function RoiEstimator({ defaults }: { defaults: RoiDefaults }) {
  const [learners, setLearners] = useState(defaults.learners);
  const [currentWeeks, setCurrentWeeks] = useState(defaults.currentWeeks);
  const [targetWeeks, setTargetWeeks] = useState(defaults.targetWeeks);
  const [costPerLearnerPerWeek, setCostPerLearnerPerWeek] = useState(defaults.costPerLearnerPerWeek);

  const model = useMemo(() => {
    const safeLearners = clamp(Math.round(learners), 10, 20000);
    const safeCurrent = clamp(Math.round(currentWeeks), 2, 104);
    const safeTarget = clamp(Math.round(targetWeeks), 1, safeCurrent);
    const safeCost = clamp(Math.round(costPerLearnerPerWeek), 50, 5000);

    const weeksSavedPerLearner = Math.max(0, safeCurrent - safeTarget);
    const totalWeeksSaved = weeksSavedPerLearner * safeLearners;
    const grossImpact = totalWeeksSaved * safeCost;

    return {
      safeLearners,
      safeCurrent,
      safeTarget,
      safeCost,
      weeksSavedPerLearner,
      totalWeeksSaved,
      grossImpact,
    };
  }, [learners, currentWeeks, targetWeeks, costPerLearnerPerWeek]);

  return (
    <div className="rounded-2xl border border-card-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            ROI estimator (quick)
          </div>
          <div className="mt-2 text-lg font-semibold tracking-tight">
            Estimate impact from reduced time-to-competency.
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">
            This is a directional model to start executive conversations. You can replace the inputs
            with your internal data for a sharper estimate.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <Slider
            label="Learners in scope"
            value={learners}
            min={10}
            max={5000}
            step={10}
            display={`${numberFmt.format(model.safeLearners)} learners`}
            onChange={setLearners}
          />
          <Slider
            label="Current time-to-competency"
            value={currentWeeks}
            min={2}
            max={52}
            step={1}
            display={`${model.safeCurrent} weeks`}
            onChange={setCurrentWeeks}
          />
          <Slider
            label="Target time-to-competency"
            value={targetWeeks}
            min={1}
            max={model.safeCurrent}
            step={1}
            display={`${model.safeTarget} weeks`}
            onChange={setTargetWeeks}
          />
          <Slider
            label="Cost per learner per week"
            value={costPerLearnerPerWeek}
            min={50}
            max={2000}
            step={25}
            display={`${formatMoney(model.safeCost)}/week`}
            onChange={setCostPerLearnerPerWeek}
          />
        </div>

        <div className="rounded-2xl border border-card-border/60 bg-black/10 p-5">
          <div className="text-sm font-semibold tracking-tight">Estimated impact</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Kpi label="Weeks saved / learner" value={`${model.weeksSavedPerLearner}`} />
            <Kpi label="Total weeks saved" value={numberFmt.format(model.totalWeeksSaved)} />
            <Kpi label="Gross impact" value={formatMoney(model.grossImpact)} />
            <Kpi label="Model type" value="Directional" />
          </div>
          <div className="mt-4 text-xs leading-5 text-muted">
            Gross impact = learners × (current − target) × cost/week. This does not include program
            cost, attrition effects, or mobility savings.
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-card-border/60 bg-black/10 p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-card-border/60 bg-black/10 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold tracking-tight">{label}</div>
        <div className="text-sm text-muted">{display}</div>
      </div>
      <input
        className="mt-3 w-full accent-[rgba(120,162,255,0.9)]"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

