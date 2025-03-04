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

# class GenericEllipse


# class GenericEllipse


# class GenericEllipse


# class GenericEllipse


## Functions

### GenericEllipse

```cpp
public void GenericEllipse<PointType, FrameType, dimension>(PointType center, FrameType axis)
```


### GenericEllipse

```cpp
public void GenericEllipse<PointType, FrameType, dimension>(const GenericEllipse<PointType, FrameType, dimension> & other)
```


### operator=

```cpp
public GenericEllipse<PointType, FrameType, dimension> & operator=(const GenericEllipse<PointType, FrameType, dimension> & other)
```


### GenericEllipse

```cpp
public void GenericEllipse<PointType, FrameType, dimension>(GenericEllipse<PointType, FrameType, dimension> && other)
```


### operator=

```cpp
public GenericEllipse<PointType, FrameType, dimension> & operator=(GenericEllipse<PointType, FrameType, dimension> && other)
```


### center

```cpp
public const Point<dimension> & center()
```


### axes

```cpp
public const Frame<dimension> & axes()
```




# class GenericEllipse


