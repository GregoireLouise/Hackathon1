public class battleHero {
  private Image hero;

  public void init() throws SlickException {
    this.hero = new Image("battle/hero.png").getScaledCopy(2);
  }

  public void render(GameContainer container) {
    this.hero.drawCentered(container.getWidth() * 1 / 4, container.getHeight() / 2);
  }
}

public class BattleVilain {
  private Image ennemy;

  public void init() throws SlickException {
    this.ennemy = new Image("battle/vilain.png").getScaledCopy(2);
  }

  public void render(GameContainer container) {
    this.ennemy.drawCentered(container.getWidth() * 3 / 4, container.getHeight() / 2);
  }
}

Classe :: BattleEnnemypublic class BattleGameState extends BasicGameState {
  // déclaration des autres variables (leçon précédente)
  private BattleVilain vilain = new BattleVilain();
  private BattleHero hero = new BattleHero();

  @Override
  public void init(GameContainer container, StateBasedGame game) throws SlickException {
    // initialisation du fond (leçon précédente)
    this.vilain.init();
    this.hero.init();
  }

  @Override
  public void render(GameContainer container, StateBasedGame game, Graphics g) throws SlickException {
    // affichage du fond (leçon précédente)
    this.hero.render(container);
    this.vilain.render(container);
  }
}

public class BattleHero {
  private int pv = 1500;
  private Image hero;

  // méthode init() vu précédement

  // pour cette méthode nous ajoutons l'attribut g
  public void render(GameContainer container, Graphics g) {
    hero.drawCentered(container.getWidth() * 1 / 4, container.getHeight() / 2);
    Font font = g.getFont();
    String text = Integer.toString(pv);
    font.drawString(container.getWidth() * 1 / 4 - font.getWidth(text) / 2, container.getHeight() / 2 - hero.getHeight() / 2 - font.getLineHeight(), text, Color.white);
  }

  public void setPv(int pv) { this.pv = pv; }
  public int getPv() { return pv; }
}

public class BattleVilain {
  private int pv = 1500;
  private Image hero;

  // méthode init() vu précédement

  // pour cette méthode nous ajoutons l'attribut g
  public void render(GameContainer container, Graphics g) {
    hero.drawCentered(container.getWidth() * 1 / 4, container.getHeight() / 2);
    Font font = g.getFont();
    String text = Integer.toString(pv);
    font.drawString(container.getWidth() * 1 / 4 - font.getWidth(text) / 2, container.getHeight() / 2 - hero.getHeight() / 2 - font.getLineHeight(), text, Color.white);
  }

  public void setPv(int pv) { this.pv = pv; }
  public int getPv() { return pv; }
}

public enum BattleCommand implements Command {
  ATTACK, DEFEND, FLEE
}

public class BattleGameState extends BasicGameState {
  @Override
  public void init(GameContainer container, StateBasedGame game) throws SlickException {
    // [...]
    InputProvider provider = new InputProvider(container.getInput());
    provider.bindCommand(new KeyControl(Input.KEY_A), BattleCommand.ATTACK);
    provider.bindCommand(new KeyControl(Input.KEY_D), BattleCommand.DEFEND);
    provider.bindCommand(new KeyControl(Input.KEY_F), BattleCommand.FLEE);
    provider.addListener(new BattleController(player, ennemy, game));
}

public class BattleController implements InputProviderListener {
  private BattleHero hero;
  private BattleVilain vilain;
  private StateBasedGame game;
  private Random random = new Random();

  public BattleController(BattlePlayer player, BattleEnnemy ennemy, StateBasedGame game) {
    this.hero = hero;
    this.vilain = vilain;
    this.game = game;
  }

  @Override
  public void controlPressed(Command command) {
    switch ((BattleCommand) command) {
      case ATTACK: attack(); break;
      case DEFEND: defend(); break;
      case FLEE:   flee();   break;
      default: break;
    }
  }

  @Override
  public void controlReleased(Command command) { }

  private void attack() {
    // le joueur inflige entre 7 et 10 dégats
    int playerAttack = 7 + random.nextInt(4);
    if (random.nextDouble() < .1) { // 10%
      playerAttack += playerAttack / 2; // +50% de dégats
    }
    ennemy.setPv(ennemy.getPv() - playerAttack);
    if (ennemy.getPv() <= 0) { // ennemi mort ?
      game.enterState(MapGameState.ID); // retour à la carte
    } else {
      // l'ennemi inflige entre 5 et 9 dégats
      int ennemyAttack = 5 + random.nextInt(5);
      player.setPv(player.getPv() - ennemyAttack);
      if (player.getPv() <= 0) { // joueur mort ?
        game.enterState(MainScreenGameState.ID); // retour titre
      }
    }
  }

  private void defend() {
    // l'ennemi inflige entre 5 et 9 dégâts, la moitié est absorbée
    int ennemyAttack = (5 + random.nextInt(5)) / 2;
    player.setPv(player.getPv() - ennemyAttack);
    if (player.getPv() <= 0) { // joueur mort ?
      game.enterState(MainScreenGameState.ID); // retour titre
    } else {
      // le joueur inflige entre 7 et 10 dégats sans critique
      int playerAttack = 7 + random.nextInt(4);
      ennemy.setPv(ennemy.getPv() - playerAttack);
      if (ennemy.getPv() <= 0) { // ennemi mort ?
        game.enterState(MapGameState.ID); // retour à la carte
      }
    }
  }

  private void flee() {
    // l'ennemi inflige entre 5 et 9 dégats
    int ennemyAttack = 5 + random.nextInt(5);
    player.setPv(player.getPv() - ennemyAttack);
    if (player.getPv() <= 0) { // joueur mort ?
      game.enterState(MainScreenGameState.ID); // retour titre
    } else {
      game.enterState(MapGameState.ID); // retour à la carte
    }
  }

}
