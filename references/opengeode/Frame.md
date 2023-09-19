# class Frame

# class Frame

# class Frame


## Functions

### Frame

```cpp
public void Frame<dimension>()
```


### Frame

```cpp
public void Frame<dimension>(std::array<Vector<dimension>, dimension> directions)
```


### direction

```cpp
public const Vector<dimension> & direction(local_index_t index)
```


### set_direction

```cpp
public void set_direction(local_index_t index, Vector<dimension> direction)
```


### inverse

```cpp
public Frame inverse()
```


### operator+

```cpp
public Frame operator+(const Frame<dimension> & rhs)
```


### rescale

```cpp
public Frame rescale(double length)
```


### string

```cpp
public basic_string string()
```




# class Frame

