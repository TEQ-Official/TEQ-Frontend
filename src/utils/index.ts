import { EyeIcon, UserIcon } from "@/components/icons"


const defaultAuthIcon = UserIcon;
const defaultAuthTitle = "Sign Up";

export const countries = [
    { name: "Nigeria", code: "NG", flag: "🇳🇬" },
    { name: "Canada", code: "CA", flag: "🇨🇦" },
    { name: "Ecuador", code: "EC", flag: "🇪🇨" },
    { name: "USA", code: "US", flag: "🇺🇸" },
]

export const COUNTRIES_DATA = [
  {
    name: 'Nigeria',
    code: 'NG',
    flagUrl: 'https://flagcdn.com/w320/ng.png',
  },
  {
    name: 'Ghana',
    code: 'GH',
    flagUrl: 'https://flagcdn.com/w320/gh.png',
  },
  {
    name: 'Canada',
    code: 'CA',
    flagUrl: 'https://flagcdn.com/w320/ca.png',
  },
  {
    name: 'United States',
    code: 'US',
    flagUrl: 'https://flagcdn.com/w320/us.png',
  },
  {
    name: 'Germany',
    code: 'DE',
    flagUrl: 'https://flagcdn.com/w320/de.png',
  },
  {
    name: 'France',
    code: 'FR',
    flagUrl: 'https://flagcdn.com/w320/fr.png',
  },
  {
    name: 'Japan',
    code: 'JP',
    flagUrl: 'https://flagcdn.com/w320/jp.png',
  },
  {
    name: 'Brazil',
    code: 'BR',
    flagUrl: 'https://flagcdn.com/w320/br.png',
  },
  {
    name: 'India',
    code: 'IN',
    flagUrl: 'https://flagcdn.com/w320/in.png',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    flagUrl: 'https://flagcdn.com/w320/za.png',
  },
  {
    name: 'Afghanistan',
    code: 'AF',
    flagUrl: 'https://flagcdn.com/w320/af.png',
  },
  {
    name: 'Albania',
    code: 'AL',
    flagUrl: 'https://flagcdn.com/w320/al.png',
  },
  {
    name: 'Algeria',
    code: 'DZ',
    flagUrl: 'https://flagcdn.com/w320/dz.png',
  },
  {
    name: 'Andorra',
    code: 'AD',
    flagUrl: 'https://flagcdn.com/w320/ad.png',
  },
  {
    name: 'Angola',
    code: 'AO',
    flagUrl: 'https://flagcdn.com/w320/ao.png',
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    flagUrl: 'https://flagcdn.com/w320/ag.png',
  },
  {
    name: 'Argentina',
    code: 'AR',
    flagUrl: 'https://flagcdn.com/w320/ar.png',
  },
  {
    name: 'Armenia',
    code: 'AM',
    flagUrl: 'https://flagcdn.com/w320/am.png',
  },
  {
    name: 'Australia',
    code: 'AU',
    flagUrl: 'https://flagcdn.com/w320/au.png',
  },
  {
    name: 'Austria',
    code: 'AT',
    flagUrl: 'https://flagcdn.com/w320/at.png',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    flagUrl: 'https://flagcdn.com/w320/az.png',
  },
  {
    name: 'Bahamas',
    code: 'BS',
    flagUrl: 'https://flagcdn.com/w320/bs.png',
  },
  {
    name: 'Bahrain',
    code: 'BH',
    flagUrl: 'https://flagcdn.com/w320/bh.png',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    flagUrl: 'https://flagcdn.com/w320/bd.png',
  },
  {
    name: 'Barbados',
    code: 'BB',
    flagUrl: 'https://flagcdn.com/w320/bb.png',
  },
  {
    name: 'Belarus',
    code: 'BY',
    flagUrl: 'https://flagcdn.com/w320/by.png',
  },
  {
    name: 'Belgium',
    code: 'BE',
    flagUrl: 'https://flagcdn.com/w320/be.png',
  },
  {
    name: 'Belize',
    code: 'BZ',
    flagUrl: 'https://flagcdn.com/w320/bz.png',
  },
  {
    name: 'Benin',
    code: 'BJ',
    flagUrl: 'https://flagcdn.com/w320/bj.png',
  },
  {
    name: 'Bhutan',
    code: 'BT',
    flagUrl: 'https://flagcdn.com/w320/bt.png',
  },
  {
    name: 'Bolivia',
    code: 'BO',
    flagUrl: 'https://flagcdn.com/w320/bo.png',
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    flagUrl: 'https://flagcdn.com/w320/ba.png',
  },
  {
    name: 'Botswana',
    code: 'BW',
    flagUrl: 'https://flagcdn.com/w320/bw.png',
  },
  {
    name: 'Brunei',
    code: 'BN',
    flagUrl: 'https://flagcdn.com/w320/bn.png',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    flagUrl: 'https://flagcdn.com/w320/bg.png',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    flagUrl: 'https://flagcdn.com/w320/bf.png',
  },
  {
    name: 'Burundi',
    code: 'BI',
    flagUrl: 'https://flagcdn.com/w320/bi.png',
  },
  {
    name: 'Cabo Verde',
    code: 'CV',
    flagUrl: 'https://flagcdn.com/w320/cv.png',
  },
  {
    name: 'Cambodia',
    code: 'KH',
    flagUrl: 'https://flagcdn.com/w320/kh.png',
  },
  {
    name: 'Cameroon',
    code: 'CM',
    flagUrl: 'https://flagcdn.com/w320/cm.png',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    flagUrl: 'https://flagcdn.com/w320/cf.png',
  },
  {
    name: 'Chad',
    code: 'TD',
    flagUrl: 'https://flagcdn.com/w320/td.png',
  },
  {
    name: 'Chile',
    code: 'CL',
    flagUrl: 'https://flagcdn.com/w320/cl.png',
  },
  {
    name: 'China',
    code: 'CN',
    flagUrl: 'https://flagcdn.com/w320/cn.png',
  },
  {
    name: 'Colombia',
    code: 'CO',
    flagUrl: 'https://flagcdn.com/w320/co.png',
  },
  {
    name: 'Comoros',
    code: 'KM',
    flagUrl: 'https://flagcdn.com/w320/km.png',
  },
  {
    name: 'Congo',
    code: 'CG',
    flagUrl: 'https://flagcdn.com/w320/cg.png',
  },
  // Add other countries here...
]

export const users = ["Learner", "Tutor"]

export const authPagesDetails = {
    "/auth/login": {
        title: "Log in",
        description: "Pick up where you left off!",
        Icon: defaultAuthIcon
    },
    "/auth/reset-password": {
        title: "Recover Password",
        description: "Enter your email address to reset password",
        Icon: EyeIcon
    },
    "/auth/verify-email": {
        title: "Verify mail",
        description: "We have sent a verification code to olujacobs@gmail.com. OTP expires in 2:00 minutes.",
        Icon: defaultAuthIcon
    },
    "/auth/register": {
        title: defaultAuthTitle,
        description: {
            Learner: "Join TheEnglish Cliniq as a",
            Tutor: "Ready to Teach? Let’s Make It Happen!"
        },
        Icon: defaultAuthIcon
    },
    "/auth/register/email": {
        title: defaultAuthTitle,
        description: "Enter your email address to sign up",
        Icon: defaultAuthIcon
    },
}
