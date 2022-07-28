function calculate(args)
{
    if(args.op ==="x")
    {
        return "Not supported";
    }
    else if (args.op ==="+")
    {
        return args.n1 + args.n2;
    }
    else if (args.op ==="-")
    {
        return args.n1 - args.n2;
    }
}

console.log(calculate({n1:2, n2:3, op:'+'}));
console.log(calculate({n1:5, n2:2, op:'-'}));
console.log(calculate({n1:1, n2:6, op:'x'}));
