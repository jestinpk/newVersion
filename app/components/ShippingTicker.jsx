const shippingMessages = [
  "Shipping across India",
  "Priority service: South India",
  "Lakshadweep parcel service",
  "Sri Lanka shipping — confirm first",
];

function MessageGroup({ hidden = false }) {
  return (
    <div className="shipping-ticker-group" aria-hidden={hidden || undefined}>
      {shippingMessages.map((message) => <span key={message}>{message}</span>)}
    </div>
  );
}

export default function ShippingTicker() {
  return (
    <div className="utility-bar shipping-ticker" role="region" aria-label="Shipping coverage">
      <div className="shipping-ticker-track">
        <MessageGroup />
        <MessageGroup hidden />
      </div>
    </div>
  );
}
