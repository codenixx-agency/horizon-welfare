"use client";

import { SectionWrapper, SummaryCard } from "@/components";

import { Counter } from "@/data";
import { useSWR } from "@/hooks/use-swr";
import { cn } from "@/lib/utils";
import _ from "lodash";
import CountUp from "react-countup";

export default function SummaryCards({ className }: { className?: string }) {
  const { data, isLoading, isError } = useSWR("/counter");

  const serializedData = new Counter(_.head(data?.data?.results));

  return (
    <SectionWrapper
      isLoading={isLoading}
      isError={isError}
      errorClass="h-[300px]"
      loadingClass="h-[300px]"
      hidden={
        serializedData.status !== "active" || data?.data?.results?.length === 0
      }
      className={cn(
        "container grid grid-cols-1 gap-6 py-[80px] md:grid-cols-2 lg:grid-cols-3 3xl:gap-x-20",
        className,
      )}
    >
      <SummaryCard
        imageUrl={serializedData.icon1}
        title={
          <CountUp
            enableScrollSpy={true}
            scrollSpyOnce={true}
            end={serializedData.number1}
          />
        }
        subTitle={serializedData.title1}
      />
      <SummaryCard
        imageUrl={serializedData.icon2}
        title={
          <span>
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={serializedData.number2}
            />
            <span>+</span>
          </span>
        }
        subTitle={serializedData.title2}
      />
      <SummaryCard
        imageUrl={serializedData.icon3}
        title={
          <span>
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={serializedData.number3}
            />
            <span>+</span>
          </span>
        }
        subTitle={serializedData.title3}
      />
    </SectionWrapper>
  );
}
