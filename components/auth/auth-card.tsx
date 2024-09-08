import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import BackButton from './back-button';
import Socials from './socials';

type CardWrapperProps = {
  children: React.ReactNode;
  cardTitle: string;
  backBtnURL: string;
  backBtnName: string;
  showSocials?: boolean;
}

export const AuthCard = ({
  children, cardTitle, backBtnURL, backBtnName, showSocials
}: CardWrapperProps) => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{cardTitle}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocials && (
      <CardFooter>
        <Socials />
      </CardFooter>
    )}
    <CardFooter>
      <BackButton url={backBtnURL} label={backBtnName} />
    </CardFooter>
  </Card>
  )
}