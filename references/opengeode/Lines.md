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

# class Lines


## Records

LineRange

LineRangeBase



## Functions

### Lines

```cpp
public void Lines<value-parameter-0-0>(const Lines<dimension> & )
```


### operator=

```cpp
public Lines<dimension> & operator=(const Lines<dimension> & )
```


### ~Lines

```cpp
public void ~Lines<value-parameter-0-0>()
```


### nb_lines

```cpp
public index_t nb_lines()
```


### nb_active_lines

```cpp
public index_t nb_active_lines()
```


### has_line

```cpp
public bool has_line(const uuid & id)
```


### line

```cpp
public const Line<dimension> & line(const uuid & id)
```


### lines

```cpp
public LineRange lines()
```


### active_lines

```cpp
public LineRange active_lines()
```


### save_lines

```cpp
public void save_lines(std::string_view directory)
```


### Lines

```cpp
protected void Lines<value-parameter-0-0>()
```


### Lines

```cpp
protected void Lines<value-parameter-0-0>(Lines<dimension> && other)
```


### operator=

```cpp
protected Lines<dimension> & operator=(Lines<dimension> && other)
```


### components

```cpp
public LineRange components()
```


### has_component

```cpp
public bool has_component(const uuid & id)
```


### component

```cpp
public const Line<dimension> & component(const uuid & id)
```


### create_line

```cpp
public const uuid & create_line(LinesBuilderKey key)
```


### create_line

```cpp
public const uuid & create_line(const MeshImpl & impl, LinesBuilderKey key)
```


### create_line

```cpp
public void create_line(uuid line_id, LinesBuilderKey key)
```


### create_line

```cpp
public void create_line(uuid line_id, const MeshImpl & impl, LinesBuilderKey key)
```


### delete_line

```cpp
public void delete_line(const Line<dimension> & line, LinesBuilderKey key)
```


### load_lines

```cpp
public void load_lines(std::string_view directory, LinesBuilderKey key)
```


### modifiable_lines

```cpp
public ModifiableLineRange modifiable_lines(LinesBuilderKey key)
```


### modifiable_line

```cpp
public Line<dimension> & modifiable_line(const uuid & id, LinesBuilderKey key)
```




# class Lines


# class Lines


