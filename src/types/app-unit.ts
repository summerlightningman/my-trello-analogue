
abstract class AppUnit<ID extends number, Unit extends AppUnit<ID, Unit>> {
    abstract readonly id: ID;

    protected abstract clone(): Unit

    public abstract reset(): Unit
}

export default AppUnit