import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QandA() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is energy?</AccordionTrigger>
        <AccordionContent>
          The TRON network comprises three types of resources: bandwidth,
          energy, and storage. Thanks to its unique design, storage resources
          are almost limitless. On the Bitcoin and Ethereum networks,
          transaction fees are paid with BTC and ETH, respectively. However, on
          the TRON network, transactions consume bandwidth, energy, or TRX. TRON
          supports two primary token standards: TRC-10 and TRC-20. TRC-10 tokens
          utilize bandwidth, while TRC-20 tokens require both bandwidth and
          energy. For instance, TRX and USDT on TRON are TRC-20 tokens. A single
          transfer consumes between 32k and 64k energy, depending on network
          load. On the technical side, activities like fund transfers and the
          creation and execution of smart contracts consume CPU resources. The
          processing time for these actions is measured in microseconds, where 1
          microsecond equals 1 energy unit. Hence, CPU resources are compensated
          using energy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How long should I wait to receive energy ?
        </AccordionTrigger>
        <AccordionContent>
          If we have enough available energy, you will receive it within 2-10
          minutes after payment. Exceptionally large orders are processed within
          24 hours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can the energy lease be canceled?</AccordionTrigger>
        <AccordionContent>
          You can request a specific amount of energy for 1 day, 7 days, or 30
          days. Once the order is paid, we'll send the energy to your wallet for
          the entire rental duration. Energy cannot be retrieved before the paid
          period concludes. If the "Auto-renewal" feature isn't enabled in your
          account, the rental will automatically cease at the end of the paid
          period.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          What's the duration for energy replenishment?
        </AccordionTrigger>
        <AccordionContent>
          Energy will be completely replenished within a 24-hour period
          following its usage.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
