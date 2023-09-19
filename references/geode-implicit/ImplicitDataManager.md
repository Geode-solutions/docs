# class ImplicitDataManager


```cpp
Inherits from DataConstraintsManager<dimension>
```



## Records

Impl



## Functions

### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>()
```


### ImplicitDataManager

```cpp
public void ImplicitDataManager<dimension>(ImplicitDataManager<dimension> && other)
```


### ~ImplicitDataManager

```cpp
public void ~ImplicitDataManager<dimension>()
```


### add_data_pointset

```cpp
public void add_data_pointset(const uuid & data_id, const PointSet<dimension> & pointset, double weight)
```


### set_data_value

```cpp
public void set_data_value(const uuid & data_id, double value)
```


### nb_data_points

```cpp
public index_t nb_data_points()
```


### data_point_position

```cpp
public const Point<dimension> & data_point_position(index_t data_point_index)
```


### data_point_value

```cpp
public double data_point_value(index_t data_point_index)
```


### data_point_weight

```cpp
public double data_point_weight(index_t data_point_index)
```


### data_value_from_uuid

```cpp
public double data_value_from_uuid(const uuid & data_id)
```




# class ImplicitDataManager

# class ImplicitDataManager

