import parserTable from "./parser-table";

const parser = (lexerResult) => {
  const steps = ["PROGRAM"];
  const tokens = lexerResult.map(({ token }) => token);
  let validTokenCounter = 0;
  tokens.push("$");
  const tokenSteps = [tokens.join(" ")];
  let error = false
  while (steps[steps.length - 1] !== "" && !error) {
    const currentStep = steps[steps.length - 1].split(" ");
    const firstSymbol = currentStep[0];
    const firstToken = tokens[0];
    if (firstSymbol === firstToken) {
      validTokenCounter++;
      currentStep.shift();
      tokens.shift();
      steps.push(currentStep.join(" "));
      tokenSteps.push(tokens.join(" "));
      continue;
    }
    if (parserTable[firstSymbol] !== undefined && parserTable[firstSymbol][firstToken] !== undefined) {
      currentStep.shift();
      const nextStep = [parserTable[firstSymbol][firstToken], currentStep.join(" ")].join(" ").trim();
      steps.push(nextStep)
      tokenSteps.push(tokens.join(" "));
      currentStep[0] = parserTable[firstSymbol][firstToken]
    } else {
      error = true;
    }
  }
  return { steps, tokenSteps, validTokenCounter, error };
}

export default parser