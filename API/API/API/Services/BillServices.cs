using API.Models;

namespace API.Services;

public class BillServices
{
    private List<BillDto> _billsDto = new List<BillDto>();

        public void Save(BillDto dtoB)
        {
            _billsDto.Add(dtoB);
            WriteArchive(_billsDto);
        }

        public BillDto Element(int id)
        {
            return _billsDto.ElementAt(id);
        }

        public int Size()
        {
            return _billsDto.Count();
        }

        public int Search(int pos)
        {
            for (int i = 0; i < Size(); i++)
            {
                if (Element(i).IdBill == pos)
                {
                    return i;
                }
            }
            return -1;
        }

        public void Delete(int pos)
        {
            _billsDto.RemoveAt(pos);
            WriteArchive(_billsDto);
        }

        public void Update(BillDto dtoB, int pos)
        {
            Delete(pos);
            _billsDto.Insert(pos,dtoB);
            WriteArchive(_billsDto);
        }

        private void WriteArchive(List<BillDto> clientsDto)
        {
            FileStream fileStream = File.Open(AppDomain.CurrentDomain.BaseDirectory + "\\Bill.txt", 
                FileMode.OpenOrCreate, FileAccess.ReadWrite);
            StreamWriter stream = new StreamWriter(fileStream);
            foreach (BillDto dto in this._billsDto)
            {
                string chain = Convert.ToString(dto.Ssn) + "," + Convert.ToString(dto.Location) + ","
                               + Convert.ToString(dto.Screen) + "," + Convert.ToString(dto.Price); //+ ","
                               //+ Convert.ToString(dto.NumSeats);
                stream.WriteLine(chain);
            }
            stream.Close();
            fileStream.Close();
        }

        private List<BillDto> LoadArchive()
        {
            StreamReader streamReader = new StreamReader("Bill.txt");
            _billsDto.Clear();
            string[] actualRow = null;
            BillDto dto = null;
            while (streamReader.Peek() != 1)
            {
                dto = new BillDto();
                actualRow = streamReader.ReadLine()?.Split(',');
                dto.IdBill = int.Parse(actualRow.ElementAt(0));
                dto.Ssn = int.Parse(actualRow.ElementAt(1));
                dto.Location = actualRow.ElementAt(2);
                dto.Screen = int.Parse(actualRow.ElementAt(3));
                dto.Price = int.Parse(actualRow.ElementAt(4));
                _billsDto.Add(dto);
            }
            streamReader.Close();
            return _billsDto;
        }
}