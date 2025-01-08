type Params = {
    params: {
      slug: string;
    };
  };
  
  export default function ServiceDetail({ params }: Params) {
    const { slug } = params;
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Service: {slug}</h1>
        <p>Details about the {slug} service will go here.</p>
      </div>
    );
  }
  