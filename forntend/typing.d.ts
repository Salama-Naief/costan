interface Contnet {
  id: number;
  attributes: {
    Plateform: string | null;
    amount: number | null;
    contentType: string;
    createdAt: string;
    description: string | null;
    organizationName: string | null;
    paidAd: false;
    publishdate: string;
    publishedAt: string;
    slug: string;
    tasks: {}[] | null;
    title: string;
    updatedAt: string;
    id: number;
  };
}

interface Tasks {
  id: number;
  attributes: {
    contentId: number;
    state: string;
    type: string;
    createdAt: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    id: number;
    memberId: number;
  };
}

interface User {
  id: number;
  name: string;
  img: string;
  lastConnect: string;
  job: string;
}

interface TaskContent {
  id: number;
  attributes: {
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
    taskId: number;
    textContent: string;
    img: {
      data: {
        id: number;
        attributes: {
          height: number;
          width: number;
          name: string;
          url: string;
        };
      } | null;
    };
    sound: {
      data: {
        id: number;
        attributes: {
          previewUrl: string;
          name: string;
          url: string;
        };
      } | null;
    };
    vedio: {
      data: {
        id: number;
        attributes: {
          previewUrl: string;
          name: string;
          url: string;
        };
      } | null;
    };
  };
}

interface UserData {
  expires: Date;
  id: number;
  jwt: string;
  user: {
    email: string;
    name: string;
    image: string;
  };
}
interface Comments {
  id: number;
  attributes: {
    angryCount: number | null;
    disappointedCound: number | null;
    happyCount: number | null;
    contentId: number;
    message: string;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
    fromUserId: number;
  };
}

interface ContentTypes {
  id: number;
  attributes: {
    title: string;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
    slug: string;
  };
}

/*interface Session {
  expires: string;
  id: number;
  jwt: string;
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
}*/
