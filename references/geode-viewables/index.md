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

# namespace geode



## Records

* [ViewablesConversionLibrary](ViewablesConversionLibrary.md)
* [ViewablesQEMProxyLibrary](ViewablesQEMProxyLibrary.md)


## Functions

### save_viewable_point_set

```cpp
basic_string save_viewable_point_set(const PointSet<dimension> & point_set, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### point_set_viewable_extension

```cpp
basic_string_view point_set_viewable_extension()
```


### save_viewable_polygonal_surface

```cpp
basic_string save_viewable_polygonal_surface(const PolygonalSurface<dimension> & polygonal_surface, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### polygonal_surface_viewable_extension

```cpp
basic_string_view polygonal_surface_viewable_extension()
```


### save_viewable_polyhedral_solid

```cpp
basic_string save_viewable_polyhedral_solid(const PolyhedralSolid<dimension> & polyhedral_solid, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### polyhedral_solid_viewable_extension

```cpp
basic_string_view polyhedral_solid_viewable_extension()
```


### save_viewable_raster_image

```cpp
basic_string save_viewable_raster_image(const RasterImage<dimension> & raster_image, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### raster_image_viewable_extension

```cpp
basic_string_view raster_image_viewable_extension()
```


### save_viewable_regular_grid

```cpp
basic_string save_viewable_regular_grid(const RegularGrid<dimension> & regular_grid, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### regular_grid_viewable_extension

```cpp
basic_string_view regular_grid_viewable_extension()
```


### save_viewable_section

```cpp
basic_string save_viewable_section(const Section & section, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### section_viewable_extension

```cpp
basic_string_view section_viewable_extension()
```


### save_viewable_structural_model

```cpp
basic_string save_viewable_structural_model(const StructuralModel & structural_model, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### structural_model_viewable_extension

```cpp
basic_string_view structural_model_viewable_extension()
```


### save_viewable_tetrahedral_solid

```cpp
basic_string save_viewable_tetrahedral_solid(const TetrahedralSolid<dimension> & tetrahedral_solid, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### tetrahedral_solid_viewable_extension

```cpp
basic_string_view tetrahedral_solid_viewable_extension()
```


### simplify

```cpp
bool simplify(geode::TriangulatedSurface3D & mesh)
```


### save_viewable_triangulated_surface

```cpp
basic_string save_viewable_triangulated_surface(const TriangulatedSurface<dimension> & triangulated_surface, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### triangulated_surface_viewable_extension

```cpp
basic_string_view triangulated_surface_viewable_extension()
```


### save_viewable_brep

```cpp
basic_string save_viewable_brep(const BRep & brep, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### brep_viewable_extension

```cpp
basic_string_view brep_viewable_extension()
```


### save_viewable_cross_section

```cpp
basic_string save_viewable_cross_section(const CrossSection & cross_section, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### cross_section_viewable_extension

```cpp
basic_string_view cross_section_viewable_extension()
```


### save_viewable_edged_curve

```cpp
basic_string save_viewable_edged_curve(const EdgedCurve<dimension> & edged_curve, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### edged_curve_viewable_extension

```cpp
basic_string_view edged_curve_viewable_extension()
```


### save_viewable_hybrid_solid

```cpp
basic_string save_viewable_hybrid_solid(const HybridSolid<dimension> & hybrid_solid, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### hybrid_solid_viewable_extension

```cpp
basic_string_view hybrid_solid_viewable_extension()
```


### save_viewable_implicit_cross_section

```cpp
basic_string save_viewable_implicit_cross_section(const ImplicitCrossSection & implicit_cross_section, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### implicit_cross_section_viewable_extension

```cpp
basic_string_view implicit_cross_section_viewable_extension()
```


### save_viewable_implicit_structural_model

```cpp
basic_string save_viewable_implicit_structural_model(const ImplicitStructuralModel & implicit_structural_model, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### implicit_structural_model_viewable_extension

```cpp
basic_string_view implicit_structural_model_viewable_extension()
```


### save_viewable_light_regular_grid

```cpp
basic_string save_viewable_light_regular_grid(const LightRegularGrid<dimension> & grid, basic_string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### light_regular_grid_viewable_extension

```cpp
basic_string_view light_regular_grid_viewable_extension()
```




