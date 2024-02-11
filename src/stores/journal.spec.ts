import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useJournalStore } from './journal'

describe('Journal Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const journal = useJournalStore()
    expect(journal.lastWeekWorkout?.days.length).toBe(2)
  })
})
