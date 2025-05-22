import React from "react";
import { Dimensions, Product } from "../types";
import {
  calculatePrice,
  formatPrice,
  formatDimensions,
} from "../utils/calculations";
import { Calculator, Save, Share2, Printer, ExternalLink } from "lucide-react";

interface PriceEstimateProps {
  product: Product | null;
  dimensions: Dimensions;
  quantity: number;
}

const PriceEstimate: React.FC<PriceEstimateProps> = ({
  product,
  dimensions,
  quantity,
}) => {
  if (!product) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <h2 className="bg-blue-800 text-white px-4 py-3 font-semibold">
          Price Estimate
        </h2>
        <div className="p-8 flex flex-col items-center justify-center h-64">
          <Calculator size={48} className="text-blue-300 mb-4" />
          <p className="text-gray-500 text-center">
            Select a product to view the price estimate
          </p>
        </div>
      </div>
    );
  }

  const price = calculatePrice(product, dimensions, quantity);
  const isCustomQuote = product.isCustomQuote;

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    if (!product) return;

    const estimateData = {
      product: product.name,
      category: product.subcategory || product.category,
      dimensions:
        product.calculationType !== "fixed" &&
        product.calculationType !== "custom"
          ? formatDimensions(dimensions)
          : "N/A",
      basePrice: formatPrice(product.basePrice),
      unit: product.unit,
      quantity: quantity,
      subtotal: formatPrice(price),
      gst: formatPrice(price * 0.18),
      total: formatPrice(price * 1.18),
      notes: product.notes || "N/A",
      date: new Date().toLocaleDateString(),
    };

    const blob = new Blob([JSON.stringify(estimateData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `price-estimate-${product.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <h2 className="bg-blue-800 text-white px-4 py-3 font-semibold">
        Price Estimate
      </h2>

      <div className="p-4">
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">{product.name}</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium text-gray-800">
                {product.subcategory || product.category}
              </span>
            </div>

            {product.calculationType !== "fixed" &&
              product.calculationType !== "custom" && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="font-medium text-gray-800">
                    {formatDimensions(dimensions)}
                  </span>
                </div>
              )}

            <div className="flex items-center justify-between py-3 border-b border-dashed border-blue-200">
              <span className="text-gray-800">Base Price:</span>
              <span className="font-medium text-gray-800">
                {formatPrice(product.basePrice)} / {product.unit}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-dashed border-blue-200">
              <span className="text-gray-800">Quantity:</span>
              <span className="font-medium text-gray-800">{quantity}</span>
            </div>

            {product.notes && (
              <div className="pt-1 text-xs text-blue-700 italic">
                Note: {product.notes}
              </div>
            )}
          </div>
        </div>

        {isCustomQuote ? (
          <div className="bg-blue-100 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2">
              <ExternalLink size={20} className="text-blue-700" />
              <p className="text-blue-800">
                This product requires a custom quote based on your specific
                requirements.
              </p>
            </div>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Request Custom Quote
            </button>
          </div>
        ) : (
          <div className="mb-4">
            <div className="flex items-center justify-between py-3 border-b border-dashed border-blue-200">
              <span className="text-gray-800">
                Subtotal ({quantity} {product.unit}):
              </span>
              <span className="font-medium text-gray-800">
                {formatPrice(price)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-dashed border-blue-200">
              <span className="text-gray-800">GST (18%):</span>
              <span className="font-medium text-gray-800">
                {formatPrice(price * 0.18)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-lg font-bold text-blue-900">Total:</span>
              <span className="text-xl font-bold text-blue-900">
                {formatPrice(price * 1.18)}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSave}
            className="flex-1 min-w-[100px] bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md flex items-center justify-center transition-colors"
          >
            <Save size={16} className="mr-1" />
            Save
          </button>
          {/* <button className="flex-1 min-w-[100px] bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-3 rounded-md flex items-center justify-center transition-colors">
            <Share2 size={16} className="mr-1" />
            Share
          </button> */}
          <button
            onClick={handlePrint}
            className="flex-1 min-w-[100px] bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-3 rounded-md flex items-center justify-center transition-colors"
          >
            <Printer size={16} className="mr-1" />
            Print
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Prices are estimates only and may vary. Please contact us for exact
          quotations.
        </div>
      </div>
    </div>
  );
};

export default PriceEstimate;
