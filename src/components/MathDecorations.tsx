import { Calculator, Pi, Divide, Plus, Minus, X } from "lucide-react";

const MathDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating math symbols */}
      <div className="absolute top-20 right-[15%] text-primary/10 animate-float">
        <Pi size={48} />
      </div>
      <div className="absolute top-40 left-[10%] text-secondary/20 animate-float-delayed">
        <Calculator size={40} />
      </div>
      <div className="absolute bottom-32 right-[20%] text-accent/10 animate-float">
        <Divide size={36} />
      </div>
      <div className="absolute top-60 right-[8%] text-primary/8 animate-float-delayed hidden md:block">
        <Plus size={32} />
      </div>
      <div className="absolute bottom-48 left-[15%] text-secondary/15 animate-float">
        <Minus size={28} />
      </div>
      
      {/* Math formulas as text */}
      <div className="absolute top-32 left-[25%] text-primary/5 text-2xl font-light rotate-12 animate-float-delayed">
        x² + y² = r²
      </div>
      <div className="absolute bottom-40 right-[30%] text-accent/5 text-xl font-light -rotate-6 animate-float">
        ∑(n) = n(n+1)/2
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default MathDecorations;
