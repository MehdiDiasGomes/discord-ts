/**
 * Système de logs pour le bot Discord
 * 
 * Ce module fournit des fonctions de log colorisées et formatées
 * pour faciliter le suivi et le débogage du bot.
 */

enum LogLevel {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

interface LogColors {
  reset: string;
  bright: string;
  dim: string;
  fg: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
  };
  bg: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
  };
}

// Couleurs pour les logs dans le terminal
const colors: LogColors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m'
  }
};

/**
 * Obtenir l'horodatage actuel au format HH:MM:SS
 */
const getTimestamp = (): string => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
};

/**
 * Formater un message de log avec le niveau, l'horodatage et les couleurs appropriées
 */
const formatLogMessage = (level: LogLevel, message: string): string => {
  const timestamp = getTimestamp();
  const prefix = `[${timestamp}]`;
  
  switch (level) {
    case LogLevel.INFO:
      return `${colors.fg.blue}${colors.bright}${prefix} [INFO]${colors.reset} ${message}`;
    case LogLevel.SUCCESS:
      return `${colors.fg.green}${colors.bright}${prefix} [SUCCESS]${colors.reset} ${message}`;
    case LogLevel.WARNING:
      return `${colors.fg.yellow}${colors.bright}${prefix} [WARNING]${colors.reset} ${message}`;
    case LogLevel.ERROR:
      return `${colors.fg.red}${colors.bright}${prefix} [ERROR]${colors.reset} ${message}`;
    case LogLevel.DEBUG:
      return `${colors.fg.magenta}${colors.bright}${prefix} [DEBUG]${colors.reset} ${message}`;
    default:
      return `${prefix} ${message}`;
  }
};

/**
 * Logger pour information standard
 */
export const info = (message: string): void => {
  console.log(formatLogMessage(LogLevel.INFO, message));
};

/**
 * Logger pour les succès
 */
export const success = (message: string): void => {
  console.log(formatLogMessage(LogLevel.SUCCESS, message));
};

/**
 * Logger pour les avertissements
 */
export const warn = (message: string): void => {
  console.log(formatLogMessage(LogLevel.WARNING, message));
};

/**
 * Logger pour les erreurs
 */
export const error = (message: string, err?: Error | unknown): void => {
  console.error(formatLogMessage(LogLevel.ERROR, message));
  if (err) {
    if (err instanceof Error) {
      console.error(`${colors.fg.red}${err.name}: ${err.message}${colors.reset}`);
      console.error(`${colors.dim}${err.stack}${colors.reset}`);
    } else {
      console.error(`${colors.fg.red}Unknown error:${colors.reset}`, err);
    }
  }
};

/**
 * Logger pour les informations de débogage
 * Ces logs n'apparaissent que si la variable d'environnement DEBUG est définie
 */
export const debug = (message: string): void => {
  if (process.env.DEBUG) {
    console.log(formatLogMessage(LogLevel.DEBUG, message));
  }
};

/**
 * Logger pour les événements musicaux
 */
export const music = (message: string): void => {
  console.log(`${colors.fg.cyan}${colors.bright}[${getTimestamp()}] [MUSIC]${colors.reset} ${message}`);
};

/**
 * Logger pour les commandes exécutées
 */
export const command = (name: string, author: string): void => {
  console.log(`${colors.fg.green}${colors.bright}[${getTimestamp()}] [COMMAND]${colors.reset} ${name} exécutée par ${author}`);
};

export default {
  info,
  success,
  warn,
  error,
  debug,
  music,
  command
};