'use client';
import { Button } from '@chakra-ui/react';
import useGetMembers from './service/jkt.service';
import Image from 'next/image';

export default function Jkt48Page() {
  const { data, isError, isFetching, isLoading, refetch } = useGetMembers();
  console.log(data); // Access the memberList directly

  return (
    <main>
      <Button>tes</Button>
      <div className="w-screen p-7 grid grid-cols-7 gap-5">
        {data?.map((_, i) => {
          return (
            <div key={i} className="flex flex-col items-center">
              <Image alt={_.name} src={_.src} width={100} height={100} />
              <h1>{_.name}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
}
