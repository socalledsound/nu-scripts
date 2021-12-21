const saySomething = (msg) => console.log(msg)
const logSurprisedFace = () => console.log('😲')
const logSunglassesFace = () => console.log('😎')
const saySomethingThenReact = (saySomething, reaction) => {
return (msg) => {
saySomething(msg)
reaction()
}
}

const saySomethingThenReactSurprised = saySomethingThenReact(saySomething, logSurprisedFace)
const saySomethingThenReactPleased = saySomethingThenReact(saySomething, logSunglassesFace)
saySomethingThenReact(saySomething, logSurprisedFace)('wait, what?')
