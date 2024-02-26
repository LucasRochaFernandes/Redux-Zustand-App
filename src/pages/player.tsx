import { MessageCircle } from 'lucide-react'

import { Header } from '../components/header'
import { Module } from '../components/module'
import { Video } from '../components/video'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1180px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 divide-y-2 divide-zinc-900 absolute right-0 top-0 bottom-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              amountOfLessons={2}
              title="Os mistérios do Redux"
              moduleIndex={0}
            />

            <Module
              amountOfLessons={2}
              title="Os mistérios do Redux"
              moduleIndex={1}
            />
            <Module
              amountOfLessons={2}
              title="Os mistérios do Redux"
              moduleIndex={2}
            />
            <Module
              amountOfLessons={2}
              title="Os mistérios do Redux"
              moduleIndex={3}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
