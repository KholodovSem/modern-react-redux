import {
  useFetchAlbumsQuery,
  useAddAlbumMutation
} from "../store";
import { Skeleton } from './Skeleton';
import Button from "./Button";
import { Album } from "./Album";

export const AlbumsList = ({ user }) => {
  /* 
    use[hookName]Query
    use[hookName]Mutation
    !Работают по разному.

    Query - делает запрос сразу же после загрузки реакт-компонента.
    *Это можно настраивать.
    На выходе даёт объект "result" - который имеет уйму полезных свойств и методов.

    Mutation - возвращает массив, первым элементом которого является функция,
    именно вызывая её хук срабатывает.
    Второй объект - очень похож на "results" из хука query.

    RTQ Query - умеет следить за дублирующими запросами.
    Так если мы в коде два раза запстим хук, запрос уйдёт только один.
  */
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  const [addAlbum, addResults] = useAddAlbumMutation();


  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      return <Album key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={addResults.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      {content}
    </div>);
}