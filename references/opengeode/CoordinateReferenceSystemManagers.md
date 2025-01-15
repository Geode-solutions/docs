<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class CoordinateReferenceSystemManagers


# class CoordinateReferenceSystemManagers


## Functions

### ~CoordinateReferenceSystemManagers

```cpp
public void ~CoordinateReferenceSystemManagers<>()
```


### coordinate_reference_system_manager1D

```cpp
public const CoordinateReferenceSystemManager1D & coordinate_reference_system_manager1D()
```


### coordinate_reference_system_manager2D

```cpp
public const CoordinateReferenceSystemManager2D & coordinate_reference_system_manager2D()
```


### coordinate_reference_system_manager3D

```cpp
public const CoordinateReferenceSystemManager3D & coordinate_reference_system_manager3D()
```


### main_coordinate_reference_system_manager

```cpp
public const CoordinateReferenceSystemManager<dimension> & main_coordinate_reference_system_manager()
```


### point

```cpp
public const Point<dimension> & point(index_t vertex)
```


### coordinate_reference_system_manager1D

```cpp
public CoordinateReferenceSystemManager1D & coordinate_reference_system_manager1D(CRSManagersKey )
```


### coordinate_reference_system_manager2D

```cpp
public CoordinateReferenceSystemManager2D & coordinate_reference_system_manager2D(CRSManagersKey )
```


### coordinate_reference_system_manager3D

```cpp
public CoordinateReferenceSystemManager3D & coordinate_reference_system_manager3D(CRSManagersKey )
```


### main_coordinate_reference_system_manager

```cpp
public CoordinateReferenceSystemManager<dimension> & main_coordinate_reference_system_manager(CRSManagersKey )
```


### set_point

```cpp
public void set_point(index_t vertex, Point<dimension> point, CRSManagersKey )
```


### CoordinateReferenceSystemManagers

```cpp
protected void CoordinateReferenceSystemManagers<>()
```


### CoordinateReferenceSystemManagers

```cpp
protected void CoordinateReferenceSystemManagers<>(CoordinateReferenceSystemManagers<> && other)
```


### operator=

```cpp
protected CoordinateReferenceSystemManagers<> & operator=(CoordinateReferenceSystemManagers<> && other)
```




# class CoordinateReferenceSystemManagers


# class CoordinateReferenceSystemManagers


