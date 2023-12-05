import {  useEffect,useState } from "react";

function KelasPopuler() {
    const [courses, setCourses] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
        fetch("https://65280fcd931d71583df1d176.mockapi.io/course", {
          
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setCourses(data.data);
          });
      }, []);
    
    
      const handleInput = (e) => {
        setInput(e.target.value);
      };
    
      return (
        <>
          <div className="padding-x padding-y">
            <div className="flex justify-center list-none gap-4 font-montserrat font-semibold pt-5">
              <h1 className="font-poppins text-3xl text-primary font-bold">
                Eksplor Kelas
              </h1>
            </div>
    
            <input
              type="text"
              name="input"
              placeholder="Cari Kelas"
              value={input}
              className="py-2 px-4 border-2   border-gray-300 rounded-md"
              onChange={handleInput}
            />
    
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            
                course.map((item) => (
                  <CardFilter key={item.id} course={item} />
                ))
              
            </div>
          </div>
        </>
      );
    };

export default KelasPopuler
