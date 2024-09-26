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

# class SquareMatrix


## Functions

### determinant

```cpp
public double determinant()
```


### inverse

```cpp
public SquareMatrix inverse()
```




# class SquareMatrix


# class SquareMatrix


## Functions

### determinant

```cpp
public double determinant()
```


### inverse

```cpp
public SquareMatrix inverse()
```




# class SquareMatrix


 Description of a vector in the given dimension with double coordinates



## Functions

### SquareMatrix

```cpp
public void SquareMatrix<dimension>()
```


### SquareMatrix

```cpp
public void SquareMatrix<dimension>(double default_value)
```


### SquareMatrix

```cpp
public void SquareMatrix<dimension>(std::array<Vector<dimension>, dimension> matrix_rows)
```


### value

```cpp
public double value(local_index_t row, local_index_t column)
```


### row

```cpp
public const Vector<dimension> & row(local_index_t row)
```


### set_value

```cpp
public void set_value(local_index_t row, local_index_t column, double value)
```


### operator*

```cpp
public Vector<dimension> operator*(const Vector<dimension> & vector)
```


### operator*

```cpp
public SquareMatrix operator*(const SquareMatrix<dimension> & matrix)
```


### operator+=

```cpp
public void operator+=(const SquareMatrix<dimension> & other)
```


### operator-=

```cpp
public void operator-=(const SquareMatrix<dimension> & other)
```


### operator*=

```cpp
public void operator*=(double multiplier)
```


### determinant

```cpp
public double determinant()
```


### transpose

```cpp
public SquareMatrix transpose()
```


### inverse

```cpp
public SquareMatrix inverse()
```




