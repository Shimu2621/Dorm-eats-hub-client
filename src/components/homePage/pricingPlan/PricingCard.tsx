import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

interface PricingCardProps {
  plan: string;
  price: number;
  description: string;
  benefits: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  description,
  benefits,
}) => {
  return (
    <Card className="p-6 border-none rounded-sm shadow-lg text-center transition-transform duration-300 hover:scale-110">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{plan} Plan</CardTitle>
        <p className="text-lg flex flex-col text-gray-color">
          <span className="font-bold text-5xl text-gray-700">${price}</span> /
          month
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="text-center space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 rounded-sm bg-blue-500 text-white" />{" "}
              {/* ✅ Blue check icon */}
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-10">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white hover">
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
