import Layout from '../pages/Layout'

function FormAddClass() {
  return (
    <Layout>
        
    <div className='py-10 padding-x '>
      <div className="flex flex-col w-1/2">
        <h1 className='font-bold mb-5 text-2xl '>Tambah Kelas</h1>
        <label htmlFor="" className='font-semibold mb-5 '>Nama Kelas</label>
        <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline outline-gray-300 rounded-sm sm:leading-6  w-4/6" />
        <label htmlFor="" className='font-semibold my-5 '>Deskripsi Kelas</label>
        <textarea rows="4" cols=""  name="username" id="username" className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline outline-gray-300 rounded-sm sm:leading-6" />
        <label htmlFor="" className='font-semibold my-5 ' >Harga </label>
        <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 w-2/6  focus:ring-0 sm:text-sm outline outline-gray-300 rounded-sm sm:leading-6"/>
        <label htmlFor="" className='font-semibold my-5 ' >Video </label>
        <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 w-2/6  focus:ring-0 sm:text-sm outline outline-gray-300 rounded-sm sm:leading-6"/>
        <label htmlFor="" className='font-semibold my-5 ' >Gambar </label>
        <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 w-2/6  focus:ring-0 sm:text-sm outline outline-gray-300 rounded-sm sm:leading-6"/>
        <button type='submit' className='button is-primary mb-2  text-sm font-semibold text-lg font-montserrat w-24  text-center p-3 rounded-sm bg-green-400 my-5'>Save</button>
        {/* <input htmlFor="" placeholder='Nama Kelas'>Nama Kelas</input> */}
      </div>
    </div>
    </Layout>
  )
}

export default FormAddClass
