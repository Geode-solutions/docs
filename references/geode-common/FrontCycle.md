# class FrontCycle


```cpp
Inherits from std::list<index_t>
```



## Functions

### position_in_cycle

```cpp
public optional position_in_cycle(index_t vertex)
```


### vertex0

```cpp
public index_t vertex0()
```


### vertex1

```cpp
public index_t vertex1()
```


### previous

```cpp
public index_t previous()
```


### next

```cpp
public index_t next()
```


### increment

```cpp
public void increment()
```


### current

```cpp
public index_t current()
```


### vertex_at_position

```cpp
public index_t vertex_at_position(index_t position)
```


### is_in_cycle

```cpp
public bool is_in_cycle(index_t vertex)
```


### insert_before

```cpp
public void insert_before(index_t vertex, index_t new_vertex)
```


### insert_after

```cpp
public void insert_after(index_t vertex, index_t new_vertex)
```


### remove_vertex

```cpp
public void remove_vertex(index_t vertex)
```


### split_cycle

```cpp
public FrontCycle split_cycle(index_t tie_vertex)
```


### tie_vertex

```cpp
public optional tie_vertex()
```


### generate_simple_cycles

```cpp
public vector generate_simple_cycles()
```




