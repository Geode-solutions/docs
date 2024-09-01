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

# class Segment


```cpp
Inherits from GenericSegment<RefPoint<1U>, 1U>
```



# class Segment


```cpp
Inherits from GenericSegment<RefPoint<dimension>, dimension>
```



## Functions

### Segment

```cpp
public void Segment<>(const Point<dimension> & point0, const Point<dimension> & point1)
```


### Segment

```cpp
public void Segment<>(const Segment<dimension> & other)
```


### Segment

```cpp
public void Segment<>(const OwnerSegment<dimension> & other)
```


### operator=

```cpp
public Segment<dimension> & operator=(const Segment<dimension> & other)
```


### Segment

```cpp
public void Segment<>(Segment<dimension> && other)
```


### operator=

```cpp
public Segment<dimension> & operator=(Segment<dimension> && other)
```




# class Segment


```cpp
Inherits from GenericSegment<RefPoint<3U>, 3U>
```



# class Segment


```cpp
Inherits from GenericSegment<RefPoint<2U>, 2U>
```



