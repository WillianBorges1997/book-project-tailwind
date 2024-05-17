import Image from 'next/image'


export default function Home() {
  return (
   <body className="m-0 font-roboto"> 
    <div className="w-screen h-screen bg-[#201b2c] flex justify-center items-center">
      <div className='w-screen h-screen flex justify-center items-center flex-col'>
        <h1 className='text-[#008ca7] text-3xl break-words'>Faça seu login<br  /> E entre para o mundo da literatura e criatividade</h1>
        <Image 
        src= {'/image.svg'}
        alt="Imagem" 
        width={500} 
        height={100} />
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 max-w-lg mx-auto flex flex-col justify-center items-center p-8 bg-[#2f2841] rounded-2xl shadow-xl">
        <h1 className="text-[#008ca7] block text-2xl font-bold my-4">LOGIN</h1>
    
        <div className="w-full flex flex-col items-start justify-center my-4">
          <label htmlFor="usuario" className="text-white mb-2">Senha</label>
          <input type="text" name="Usuario" placeholder="Adicione seu usuário" className="w-full border-none rounded-lg p-3 bg-[#514869] text-white text-lg shadow-xl-[#00000056] outline-none box-border placeholder-[#f0ffff94]"/>
        </div>
        <div className="w-full flex flex-col items-start justify-center my-4">
          <label htmlFor="senha" className="text-white mb-2">Senha</label>
          <input type="password" name="senha" placeholder="Adicione sua senha" className="w-full border-none rounded-lg p-3 bg-[#514869] text-white text-lg shadow-xl-[#00000056] outline-none box-border placeholder-[#f0ffff94]"/>

        </div>
        <button className="w-full px-0 py-4 my-6 rounded-lg border-none outline-none uppercase font-extrabold text-[#ffffff] bg-[#008ca7] hover:bg-[#005c7a] shadow-xl-[0px 10px 40px -12px #005464] cursor-pointer transition-background duration-200">Login</button>
        <h1 className="text-white block font-bold my-4">
  Ainda não possui uma conta? Crie uma gratuitamente clicando{" "}
  <a href="/registerPage"
     className="text-white transition-colors duration-300 hover:text-[#008ca7]">
    AQUI!
  </a>
</h1>
      </div>
      </div>
</div>
   </body>

  );
}
