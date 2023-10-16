# class CoordinateReferenceSystemManagerBuilder


# class CoordinateReferenceSystemManagerBuilder


## Functions

### CoordinateReferenceSystemManagerBuilder

```cpp
public void CoordinateReferenceSystemManagerBuilder<dimension>(CoordinateReferenceSystemManager<dimension> & crs_manager)
```


### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(string_view name, std::shared_ptr<CoordinateReferenceSystem<dimension> > && crs)
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(string_view name)
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(string_view name)
```


### active_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & active_coordinate_reference_system()
```


### coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & coordinate_reference_system(string_view name)
```




# class CoordinateReferenceSystemManagerBuilder


# class CoordinateReferenceSystemManagerBuilder


