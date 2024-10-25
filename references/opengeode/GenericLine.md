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

# class GenericLine


# class GenericLine


## Functions

### GenericLine

```cpp
public void GenericLine<PointType, dimension>(const Vector<dimension> & direction, PointType origin)
```


### GenericLine

```cpp
public void GenericLine<PointType, dimension>(const Segment<dimension> & segment)
```


### GenericLine

```cpp
public void GenericLine<PointType, dimension>(const GenericLine<PointType, dimension> & other)
```


### operator=

```cpp
public GenericLine<PointType, dimension> & operator=(const GenericLine<PointType, dimension> & other)
```


### GenericLine

```cpp
public void GenericLine<PointType, dimension>(GenericLine<PointType, dimension> && other)
```


### operator=

```cpp
public GenericLine<PointType, dimension> & operator=(GenericLine<PointType, dimension> && other)
```


### origin

```cpp
public const Point<dimension> & origin()
```


### direction

```cpp
public const Vector<dimension> & direction()
```




# class GenericLine


# class GenericLine


# class GenericLine


# class GenericLine


# class GenericLine


