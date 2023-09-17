using API.Models;

namespace API.Services;

public class ClientServices
{
    private List<ClientDto> _clientsDto = new List<ClientDto>();

        public void Save(ClientDto dtoC)
        {
            _clientsDto.Add(dtoC);
            WriteArchive(_clientsDto);
            
        }

        public ClientDto Element(int ssn)
        {
            return _clientsDto.ElementAt(ssn);
        }

        public int Size()
        {
            return _clientsDto.Count();
        }

        public int Search(int pos)
        {
            for (int i = 0; i < Size(); i++)
            {
                if (Element(i).Ssn == pos)
                {
                    return i;
                }
            }
            return -1;
        }

        public void Delete(int pos)
        {
            _clientsDto.RemoveAt(pos);
            WriteArchive(_clientsDto);
        }

        public void Update(ClientDto dtoC, int pos)
        {
            Delete(pos);
            _clientsDto.Insert(pos,dtoC);
            WriteArchive(_clientsDto);
        }

        public int Age(ClientDto dtoC)
        {
            DateTime today = DateTime.Today;
            DateTime bDay = dtoC.BirthDate;
            TimeSpan dif = today.Subtract(bDay);
            DateTime firstDay = new DateTime(1, 1, 1);
            int age = (firstDay + dif).Year - 1;
            return age;
        }

        private void WriteArchive(List<ClientDto> clientsDto)
        {
            FileStream fileStream = File.Open("./Client.txt", 
                FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamWriter stream = new StreamWriter(fileStream);
            foreach (ClientDto dto in this._clientsDto)
            {
                string chain = Convert.ToString(dto.Ssn) + "," + Convert.ToString(dto.Name) + ","
                               + Convert.ToString(dto.CellPhone) + "," + Convert.ToString(dto.Email) + ","
                               + Convert.ToString(dto.BirthDate);
                stream.WriteLine(chain);
            }
            stream.Close();
            fileStream.Close();
        }

        private List<ClientDto> LoadArchive()
        {
            StreamReader streamReader = new StreamReader("./Client.txt");
            _clientsDto.Clear();
            string[] actualRow = null;
            ClientDto dto = null;
            while (streamReader.Peek() != 1)
            {
                dto = new ClientDto();
                actualRow = streamReader.ReadLine()?.Split(',');
                dto.Ssn = int.Parse(actualRow.ElementAt(0));
                dto.Name = actualRow.ElementAt(1);
                dto.CellPhone = int.Parse(actualRow.ElementAt(2));
                dto.Email = actualRow.ElementAt(3);
                dto.BirthDate = DateTime.Parse(actualRow.ElementAt(4));
                _clientsDto.Add(dto);
            }
            streamReader.Close();
            return _clientsDto;
        }
}