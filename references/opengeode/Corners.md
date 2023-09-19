# class Corners


 Storage class providing range loop to iterate on Corners



## Records

CornerRangeBase

CornerRange



## Functions

### Corners

```cpp
public void Corners<>(const Corners<> & )
```


### operator=

```cpp
public Corners<> & operator=(const Corners<> & )
```


### ~Corners

```cpp
public void ~Corners<>()
```


### nb_corners

```cpp
public index_t nb_corners()
```


### has_corner

```cpp
public _Bool has_corner(const uuid & id)
```


### corner

```cpp
public const Corner<dimension> & corner(const uuid & id)
```


 Access to an unmodifiable Corner by its unique index

### corners

```cpp
public CornerRange corners()
```


### save_corners

```cpp
public void save_corners(string_view directory)
```


 Save each Corner in a file located in the specified directory

### Corners

```cpp
protected void Corners<>()
```


### Corners

```cpp
protected void Corners<>(Corners<> && other)
```


### operator=

```cpp
protected Corners<> & operator=(Corners<> && other)
```




# class Corners


# class Corners

