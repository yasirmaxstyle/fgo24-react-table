import { useState } from 'react'

function Table({ data }) {
  return (
    <table className='table-auto border border-collapse mt-10 text-center'>
      <thead>
        <tr>
          <th className='p-2'>No.</th>
          <th className='p-2'>Nama</th>
          <th className='p-2'>Usia</th>
          <th className='p-2'>Jenis-Kelamin</th>
          <th className='p-2'>Apakah Perokok?</th>
          <th className='p-2'>Rokok yang Pernah Dicoba?</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, idx) =>
          <tr key={idx}>
            <td className='p-2'>{idx + 1}</td>
            <td className='p-2'>{el.name}</td>
            <td className='p-2'>{el.age}</td>
            <td className='p-2'>{el.gender}</td>
            <td className='p-2'>{el.isSmoker}</td>
            <td className='p-2'>{el.brand.join(', ')}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

function App() {
  const [data, setData] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const form = Object.fromEntries(formData.entries())
    const cigarBrands = []
    e.target.brand.forEach(element => {
      element.checked && cigarBrands.push(element.value)
    });
    form.brand = cigarBrands
    setData([...data, form])
    e.target.reset()
  }
  return (
    <div className='flex flex-col py-10 px-30'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <h1 className='text-5xl font-bold text-center'>Survey Perokok</h1>
        <div className='flex flex-col gap-3'>
          <label htmlFor="name">Siapa nama anda?</label>
          <input type="text" name="name" id="name" className='w-full border h-10 rounded px-4' />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="age">Berapa umur anda?</label>
          <input type="number" name="age" id="age" className='w-full border h-10 rounded px-4' />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="">Apa jenis kelamin anda?</label>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
              <input type="radio" name="gender" id="men" value='laki-laki' />
              <label htmlFor="men">Laki-laki</label>
            </div>
            <div className='flex gap-3'>
              <input type="radio" name="gender" id="women" value='perempuan' />
              <label htmlFor="women">Perempuan</label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p>Apakah anda perokok?</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
              <input type="radio" name="isSmoker" id="true" value='ya' />
              <label htmlFor="true">Ya</label>
            </div>
            <div className='flex gap-3'>
              <input type="radio" name="isSmoker" id="false" value='tidak' />
              <label htmlFor="false">Tidak</label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p>Jika anda perokok, rokok apa yang anda pernah coba?</p>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
              <input type="checkbox" name="brand" id="garpit" value='Gudang Garam Filter' />
              <label htmlFor="garpit">Gudang Garam Filter</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name="brand" id="lucky" value='Lucky Strike' />
              <label htmlFor="lucky">Lucky Strike</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name="brand" id="marlboro" value='Marlboro' />
              <label htmlFor="marlboro">Marlboro</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name="brand" id="esse" value='Esse' />
              <label htmlFor="esse">Esse</label>
            </div>
          </div>
        </div>
        <button type="submit" className='border p-2 rounded'>Submit</button>
      </form>
      <Table data={data} />
    </div>
  )
}

export default App
