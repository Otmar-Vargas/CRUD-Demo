import axios from "axios";
export function getAllInversions() {
    return new Promise((resolve, reject) => {
      //FIC: http://localhost:8080/api/pwa/institutes  
      axios.get(import.meta.env.VITE_REST_API_USERS_GET)
        .then((response) => {
          const data = response.data;
         // 
         // 
          if (!data.success) {
             const InstitutesData = data;
            resolve(InstitutesData); // Resuelve la promesa y hace una copia profunda
           // Rechaza la promesa con la respuesta si no fue exitosa
          } else if (data.data.length === 0) {
            console.info("🛈 No se encontraron documentos en <<cat_institutos>>");
            resolve([]); 
          } else if (data.success) {
            const InstitutesData = data[0];
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
  