import axios from "axios";
export function getAllInversions() {
    return new Promise((resolve, reject) => {
      //FIC: http://localhost:8080/api/pwa/institutes  
      axios.get(import.meta.env.VITE_REST_API_USERS_GET)
        .then((response) => {
          const data = response.data;
         // console.log("getProducts()", data);
  
          if (!data.success) {
            console.error("No se pudo realizar correctamente la petición <<getAllInstitutes - Services>>", data);
            reject(data); // Rechaza la promesa con la respuesta si no fue exitosa
          } else if (data.data.length === 0) {
            console.info("🛈 No se encontraron documentos en <<cat_institutos>>");
            resolve([]); 
          } else if (data.success) {
            const InstitutesData = data.data[0].dataRes;
            console.log("Colección: <<cat_institutos>>", InstitutesData);
            resolve(JSON.parse(JSON.stringify(InstitutesData))); // Resuelve la promesa y hace una copia profunda
          }
        })
        .catch((error) => {
          console.error("Error en <<getAllInstitutes - Services>>", error);
          reject(error); // Rechaza la promesa en caso de error
        });
    });
  }
  