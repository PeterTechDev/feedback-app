import { CloseButton } from './CloseButton';

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className="">

        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />

      </header>

      <h1>Hello Peter</h1>

      <footer className="text-xs ">
        Desenvolvido por <a className="underline underline-offset-2" href="http://google.com" target="_blank">Peter Tech Dev</a>
      </footer>
    </div>
  )
}