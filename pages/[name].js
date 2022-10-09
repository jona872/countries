import React from 'react'
import Layout from '../components/Layout/Layout'



export default function showCountry({ props }) {
  console.log("🚀 ~ file: [name].js ~ line 7 ~ showCountry ~ props", props)
  return (
    <Layout>
      <div className="grid place-items-center h-5/6" >
        Country
      </div>
    </Layout>

  )
}


// export const getServerSideProps = async (context) => {
//   const res = await axios.put('http://0.0.0.0:3000/api/products/edit' + context.query.id);
//   console.log(context);

//   return {
//     props: {

//     }
//   }
// }
