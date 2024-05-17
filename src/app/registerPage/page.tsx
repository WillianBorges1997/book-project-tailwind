import Image from 'next/image'

export default function Home() {
  return (
    <body className="m-0 font-roboto"> 
      <div className="w-screen h-screen bg-[#201b2c] flex justify-center items-center">
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
          <h1 className='text-[#008ca7] text-3xl break-words'>Efetue o seu cadastro<br  /> E comece sua jornada literária aqui! </h1>
          <Image 
            src={'/register.svg'}
            alt="Imagem" 
            width={500} 
            height={100} />
        </div>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-3/2 max-w-lg mx-auto flex flex-col justify-center items-center p-8 bg-[#2f2841] rounded-2xl shadow-xl">
            <h1 className="text-[#008ca7] block text-2xl font-bold my-4">Cadastre-se</h1>

            <div className="w-full grid grid-cols-2 gap-4">

              <div className="flex flex-col">
                <label htmlFor="usuario" className="text-white mb-2">Nome</label>
                <input type="text" name="usuario" placeholder="Digite seu nome" className="w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname" className='text-white mb-2'>Sobrenome</label>
                <input id="lastname" type="text" name='lastname' placeholder='Digite seu sobrenome' required className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="birthDate" className='text-white mb-2'>Data de nascimento</label>
                <input id="password" type="date" name='confirmpassword' placeholder="Data de aniversário" required  className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="birthDate" className='text-white mb-2'>Sexo</label>
                <input id="password" type="text" name='confirmpassword' placeholder="Informe seu sexo" required  className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className='text-white mb-2'>Email</label>
                <input id="email" type="text" name='email' placeholder='Digite seu email' required className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="celular" className='text-white mb-2'>Celular</label>
                <input id="cell" type="tel" name='cell' placeholder='Digite seu número' required className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="senha" className='text-white mb-2'>Senha</label>
                <input id="password" type="password" name='confirmpassword' placeholder="Digite sua senha" required  className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="senha" className='text-white mb-2'>Confirmação de senha</label>
                <input id="password" type="password" name='confirmpassword' placeholder="Confirme sua senha" required  className='w-full px-3 py-2 rounded-lg bg-[#514869] text-white text-lg border-2 border-[#00000056] shadow-xl-[#00000056] outline-none placeholder-[#f0ffff94]'/>
              </div>
              

            </div>

            <h1 className="text-white block font-bold mt-4 mr-14">
  Eu concordo com os termos de uso do site
</h1>
            
            <button className="w-full px-0 py-4 my-6 rounded-lg border-none outline-none uppercase font-extrabold text-[#ffffff] bg-[#008ca7] hover:bg-[#005c7a] shadow-xl-[0px 10px 40px -12px #005464] cursor-pointer transition-background duration-200">Concluir cadastro</button>
          </div>
        </div>
      </div>
    </body>
  )
}


