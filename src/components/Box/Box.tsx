// import { BarChart } from '@mui/x-charts/BarChart';

export default function Box(props: any) {
  return (
    <div className="mt-4 mx-1 relative border rounded-lg border-solid" style={{ color: 'rgb(28, 92, 95)' }}>
      <div className=" rounded-lg w-full p-4 pb-0">
        <div className="flex justify-start items-center h-full">
          <img src={`assets/icons/${props.img}`} className="mr-2 w-8" alt="" />
          <h1>{props.title}</h1>
        </div>
        <div className="flex justify-between my-6">
          <div className="justify-start text-start">
            <h4>{props.h4[2]} </h4>
            <h1 className="text-5xl my-2">{props.valueT}</h1>
            <h6 className="text-start my-1">{props.h6}: 8</h6>
            <h6>Average {props.avg}: $150.20</h6>
          </div>
          <div className="justify-end text-start " style={{ color: '#5A7894' }}>
            <h4>{props.h4[1]}</h4>
            <h1 className="text-5xl my-2">{props.valueL}</h1>
            <h6 className=" my-1">{props.h6}: 8</h6>
            <h6>Average {props.avg}: $150.20</h6>
          </div>
        </div>
        {props.h4[1] != 'All time' ? (
          <div className=" w-fit m-auto text-left">
            <h6 style={{ color: '#25384D', marginBottom: '20px' }}>{props.stats}</h6>
            {props.chart}
          </div>
        ) : null}
      </div>
    </div>
  );
}
