# class HorizonsBuilder


# class HorizonsBuilder


# class HorizonsBuilder


## Functions

### load_horizons

```cpp
public void load_horizons(string_view directory)
```


### set_horizon_type

```cpp
public void set_horizon_type(const uuid & horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```


### set_horizon_name

```cpp
public void set_horizon_name(const uuid & id, string_view name)
```


### HorizonsBuilder

```cpp
protected void HorizonsBuilder<dimension>(Horizons<dimension> & horizons)
```


### create_horizon

```cpp
protected const uuid & create_horizon()
```


### create_horizon

```cpp
protected const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type)
```


### create_horizon

```cpp
protected void create_horizon(uuid horizon_id)
```


### create_horizon

```cpp
protected void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```


### delete_horizon

```cpp
protected void delete_horizon(const Horizon<dimension> & horizon)
```


### set_horizon_type

```cpp
public void set_horizon_type(const uuid & horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```

### create_horizon

```cpp
protected const uuid & create_horizon(typename Horizon<dimension>::HORIZON_TYPE type)
```

### create_horizon

```cpp
protected void create_horizon(uuid horizon_id, typename Horizon<dimension>::HORIZON_TYPE type)
```



