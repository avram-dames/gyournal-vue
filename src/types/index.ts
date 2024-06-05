export type Workout = {
  id: number
  name: string
  setsPerExercise: number
  repsPerSet: number
  exercises: { id: number; name: string; target: string[] }[]
}

export type Exercise = {
  id: number
  name: string
  target: string[]
}
