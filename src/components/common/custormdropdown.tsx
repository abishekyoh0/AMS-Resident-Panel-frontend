import { useState, useRef, useEffect, type ReactNode } from "react";
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";

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
    className={`transition-transform duration-200 shrink-0 ${open ? "rotate-180" : "rotate-0"}`}
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>

      {/* Label */}
      {label && (
        <label className={`block mb-1 ${FONTSIZE[14]} ${FONTWEIGHT[700]}`}>
          {label}
          {required && <span className=" ml-0.5">*</span>}
        </label>
      )}

      {/* Trigger */}
      <div
        onClick={() => setOpen((p) => !p)}
        className={`
          w-full px-3 py-2 rounded-[10px] cursor-pointer select-none
          flex items-center justify-between gap-2.5
          bg-[#FFFFFF0D] text-sm transition-colors duration-200
          ${open ? "border border-white/35" : "border border-[#FFFFFF33]"}
          ${selected ? "text-white" : "text-gray-500"}
        `}
      >
        <span className="flex items-center gap-2">
          {selected?.icon && (
            <span className="flex items-center text-blue-300">
              {selected.icon}
            </span>
          )}
          {selected ? selected.label : placeholder}
        </span>
        <span className="text-gray-500">
          <ChevronIcon open={open} />
        </span>
      </div>

      {/* Dropdown list */}
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-[9999] bg-[#0C061E] border border-[#FFFFFF33] rounded-2xl p-2 shadow-[0_12px_40px_rgba(0,0,0,0.6)] animate-dropdown">
          <style>{`
            @keyframes dropdownFadeIn {
              from { opacity: 0; transform: translateY(-6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .animate-dropdown { animation: dropdownFadeIn 0.15s ease; }
          `}</style>

          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`
                  w-full px-3.5 py-2.5 mb-1.5 rounded-[9px] cursor-pointer
                  flex items-center justify-center gap-2.5
                  border border-[#FFFFFF33] transition-colors duration-150 ${FONTSIZE[16]} ${FONTWEIGHT[700]}
                  ${isSelected
                    ? "bg-blue-400/10"
                    : "bg-[#FFFFFF0D] hover:bg-white/10"}
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  {opt.icon && (
                    <span className={`flex items-center ${isSelected ? "text-blue-300" : "text-gray-400"}`}>
                      {opt.icon}
                    </span>
                  )}
                  {opt.label}
                </span>
                {isSelected && (
                  <span className="text-blue-400 ml-auto">
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

export default CustomDropdown;