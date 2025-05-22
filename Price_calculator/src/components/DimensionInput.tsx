import React from "react";
import { Dimensions } from "../types";
import { ArrowRight, RotateCw } from "lucide-react";

interface DimensionInputProps {
  dimensions: Dimensions;
  onDimensionsChange: (dimensions: Dimensions) => void;
  availableThicknesses?: number[];
  calculationType: "area" | "volume" | "fixed" | "custom";
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const DimensionInput: React.FC<DimensionInputProps> = ({
  dimensions,
  onDimensionsChange,
  availableThicknesses,
  calculationType,
  quantity,
  onQuantityChange,
}) => {
  const handleInputChange = (field: keyof Dimensions, value: string) => {
    const numValue = parseFloat(value) || 0;

    if (field === "unit") {
      onDimensionsChange({
        ...dimensions,
        unit: value as "mm" | "cm" | "inch" | "ft",
      });
    } else {
      onDimensionsChange({
        ...dimensions,
        [field]: numValue,
      });
    }
  };

  const handleThicknessSelect = (thickness: number) => {
    onDimensionsChange({
      ...dimensions,
      thickness,
    });
  };

  const swapDimensions = () => {
    onDimensionsChange({
      ...dimensions,
      length: dimensions.width,
      width: dimensions.length,
    });
  };

  const disabledForFixed =
    calculationType === "fixed" || calculationType === "custom";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="bg-blue-800 text-white px-4 py-3 font-semibold">
        Dimensions
      </h2>

      <div className="p-4 space-y-4">
        {!disabledForFixed && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="length"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Length
                </label>
                <input
                  type="number"
                  id="length"
                  min="0"
                  step="0.01"
                  value={dimensions.length || ""}
                  onChange={(e) => handleInputChange("length", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="width"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Width
                </label>
                <input
                  type="number"
                  id="width"
                  min="0"
                  step="0.01"
                  value={dimensions.width || ""}
                  onChange={(e) => handleInputChange("width", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                <button
                  type="button"
                  onClick={swapDimensions}
                  className="absolute right-0 bottom-0 bg-blue-100 p-2 rounded-tl rounded-br text-blue-800 hover:bg-blue-200"
                  title="Swap length and width"
                >
                  <RotateCw size={15} />
                </button>
              </div>

              <div>
                <label
                  htmlFor="unit"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Unit
                </label>
                <select
                  id="unit"
                  value={dimensions.unit}
                  onChange={(e) => handleInputChange("unit", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="mm">Millimeter (mm)</option>
                  <option value="cm">Centimeter (cm)</option>
                  <option value="inch">Inch (in)</option>
                  <option value="ft">Feet (ft)</option>
                </select>
              </div>
            </div>

            {calculationType === "volume" && (
              <div>
                <label
                  htmlFor="thickness"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Thickness
                </label>
                {availableThicknesses && availableThicknesses.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {availableThicknesses.map((thickness) => (
                      <button
                        key={thickness}
                        type="button"
                        onClick={() => handleThicknessSelect(thickness)}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          dimensions.thickness === thickness
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        }`}
                      >
                        {thickness} mm
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="number"
                    id="thickness"
                    min="0"
                    step="0.01"
                    value={dimensions.thickness || ""}
                    onChange={(e) =>
                      handleInputChange("thickness", e.target.value)
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                )}
              </div>
            )}
          </>
        )}

        <div className="pt-2">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-l-md hover:bg-blue-200"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) =>
                onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 text-center border-t border-b border-gray-300"
            />
            <button
              type="button"
              onClick={() => onQuantityChange(quantity + 1)}
              className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-r-md hover:bg-blue-200"
            >
              +
            </button>
          </div>
        </div>

        {(calculationType === "fixed" || calculationType === "custom") && (
          <div className="bg-blue-50 p-3 rounded-md mt-2">
            <p className="text-sm text-blue-800">
              {calculationType === "fixed"
                ? "This product has a fixed price per unit."
                : 'This product requires a custom quote. Please use the "Request Quote" button.'}
            </p>
          </div>
        )}

        {!disabledForFixed && (
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Input Dimensions</span>
            <ArrowRight size={14} />
            <span>Get Price Estimate</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DimensionInput;
