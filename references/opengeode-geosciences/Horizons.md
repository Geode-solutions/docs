# class Horizons

# class Horizons

# class Horizons

## Records

HorizonRangeBase

HorizonRange

## Functions

### Horizons

```cpp
public void Horizons<>(const Horizons<> & )
```

### operator=

```cpp
public Horizons<> & operator=(const Horizons<> & )
```

### ~Horizons

```cpp
public void ~Horizons<>()
```

### nb_horizons

```cpp
public index_t nb_horizons()
```

### has_horizon

```cpp
public bool has_horizon(const uuid & id)
```

### horizon

```cpp
public const Horizon<dimension> & horizon(const uuid & id)
```

### horizons

```cpp
public HorizonRange horizons()
```

### save_horizons

```cpp
public void save_horizons(string_view directory)
```

### Horizons

```cpp
protected void Horizons<>()
```

### Horizons

```cpp
protected void Horizons<>(Horizons<> && )
```

### operator=

```cpp
protected Horizons<dimension> & operator=(Horizons<dimension> && other)
```
