import { useState, useRef, useEffect, type ReactNode } from "react";

/**
 * CustomDropdown — reusable dropdown component
 *
 * Props:
 *  - label: string                    — field label above the dropdown
 *  - required: boolean                — shows * after label
 *  - placeholder: string              — placeholder text when nothing selected
 *  - options: Array<{
 *       value: string,                — the actual value stored/returned
 *       label: string,                — display text
 *       icon?: ReactNode              — optional icon before label
 *    }>
 *  - value: string                    — controlled selected value
 *  - onChange: (value: string) => void
 *  - className?: string               — extra class on wrapper
 *
 * Usage example:
 *
 *   const visitorTypes = [
 *     { value: "guest",    label: "Guest",       icon: <UserIcon /> },
 *     { value: "delivery", label: "Delivery",    icon: <TruckIcon /> },
 *     { value: "service",  label: "Service" },
 *   ];
 *
 *   <CustomDropdown
 *     label="Visitor Type"
 *     required
 *     placeholder="Select visitor type"
 *     options={visitorTypes}
 *     value={selectedType}
 *     onChange={setSelectedType}
 *   />
 */

interface DropdownOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface CustomDropdownProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  options?: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
      flexShrink: 0,
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function CustomDropdown({
  label,
  required = false,
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  className = "",
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {label && (
        <label
          style={{
            color: "#9CA3AF",
            fontSize: "0.875rem",
            display: "block",
            marginBottom: "4px",
          }}
        >
          {label}
          {required && (
            <span style={{ color: "#60A5FA", marginLeft: "2px" }}>*</span>
          )}
        </label>
      )}

      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: "#FFFFFF0D",
          border: `1px solid ${open ? "rgba(255,255,255,0.35)" : "#FFFFFF33"}`,
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          color: selected ? "#ffffff" : "#6B7280",
          fontSize: "0.9rem",
          transition: "border-color 0.2s",
          userSelect: "none",
          boxSizing: "border-box",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {selected?.icon && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#93C5FD",
              }}
            >
              {selected.icon}
            </span>
          )}
          {selected ? selected.label : placeholder}
        </span>
        <span style={{ color: "#6B7280" }}>
          <ChevronIcon open={open} />
        </span>
      </div>

      {/* Dropdown list */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#0C061E",
            border: "1px solid #FFFFFF33",
            borderRadius: "14px",
            padding: "8px",
            zIndex: 9999,
            boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
            animation: "dropdownFadeIn 0.15s ease",
          }}
        >
          <style>{`
            @keyframes dropdownFadeIn {
              from { opacity: 0; transform: translateY(-6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .dd-option:hover {
              background: rgba(255,255,255,0.1) !important;
            }
          `}</style>

          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                className="dd-option"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "9px",
                  border: "1px solid #FFFFFF33",
                  background: isSelected
                    ? "rgba(96,165,250,0.12)"
                    : "#FFFFFF0D",
                  color: isSelected ? "#93C5FD" : "#E5E7EB",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  fontSize: "0.875rem",
                  marginBottom: "6px",
                  transition: "background 0.15s",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {opt.icon && (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: isSelected ? "#93C5FD" : "#9CA3AF",
                      }}
                    >
                      {opt.icon}
                    </span>
                  )}
                  {opt.label}
                </span>
                {isSelected && (
                  <span style={{ color: "#60A5FA" }}>
                    <CheckIcon />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Demo ──────────────────────────────────────────────────────────────────────

const UserIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const TruckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const WrenchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const CarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="16.5" cy="17.5" r="2.5" />
  </svg>
);
const HomeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const visitorTypeOptions = [
  { value: "guest", label: "Guest", icon: <UserIcon /> },
  { value: "delivery", label: "Delivery", icon: <TruckIcon /> },
  { value: "service", label: "Service", icon: <WrenchIcon /> },
  { value: "cabdriver", label: "Cab Driver", icon: <CarIcon /> },
  { value: "contractor", label: "Contractor", icon: <WrenchIcon /> },
  { value: "realestate", label: "Real Estate", icon: <HomeIcon /> },
];

const visitPurposeOptions = [
  { value: "social", label: "Social Visit" },
  { value: "pickup", label: "Delivery Pickup" },
  { value: "food", label: "Food Delivery" },
  { value: "maintenance", label: "Maintenance Work" },
  { value: "cleaning", label: "Cleaning Services" },
];

export default function Demo() {
  const [visitorType, setVisitorType] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0c10",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "#0C061E",
          border: "1px solid #FFFFFF1A",
          borderRadius: "18px",
          padding: "32px",
          width: "100%",
          maxWidth: "520px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
          ➕ Add Expected Visitor
        </h2>

        <CustomDropdown
          label="Visitor Type"
          required
          placeholder="Select visitor type"
          options={visitorTypeOptions}
          value={visitorType}
          onChange={setVisitorType}
        />

        <CustomDropdown
          label="Purpose of Visit"
          required
          placeholder="Select purpose"
          options={visitPurposeOptions}
          value={visitPurpose}
          onChange={setVisitPurpose}
        />

        {/* Live output */}
        {(visitorType || visitPurpose) && (
          <div
            style={{
              background: "rgba(96,165,250,0.08)",
              border: "1px solid rgba(96,165,250,0.25)",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "0.8rem",
              color: "#93C5FD",
            }}
          >
            <strong>Selected values:</strong>
            <pre style={{ margin: "6px 0 0", color: "#60A5FA" }}>
              {JSON.stringify({ visitorType, visitPurpose }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
