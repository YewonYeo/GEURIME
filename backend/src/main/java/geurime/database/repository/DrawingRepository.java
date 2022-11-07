package geurime.database.repository;

import geurime.database.entity.Drawing;
import geurime.database.entity.DrawingBox;
import geurime.database.entity.Kid;
import geurime.database.enums.BoxType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface DrawingRepository extends JpaRepository<Drawing, Long> {
    List<Drawing> findByDrawingBox_KidAndIsLikeTrue(Kid kid);

    List<Drawing> findByDrawingBox_KidAndDrawingBox_DrawingBoxCategory(Kid kid, BoxType drawingBoxCategory);

    List<Drawing> findByDrawingBox_KidAndCreateTimeBetween(Kid kid, LocalDateTime createTimeStart, LocalDateTime createTimeEnd);

    List<Drawing> findByDrawingBox_KidAndDrawingTitleContains(Kid kid, String drawingTitle);

    Optional<Drawing> findFirstByDrawingBox(DrawingBox drawingBox);

    long countByDrawingBox(DrawingBox drawingBox);

//        @Query(value =
//        "SELECT "+
//        " new moon.odyssey.entity.YearReportSum(rp.year, SUM(rp.loanSmall), SUM (rp.loanMajor), SUM (rp.loanTotal))" +
//        "FROM Report rp " +
//        "GROUP BY rp.year"
//    )

//    @Query(value = "select new geurime.database.entity.Drawing.CountHeatMapResponse(dr.createTime, count(dr.createTime)) from Drawing dr group by dr.createTime")
//    List<Object> findDrawingCountList();

//        @Query("select f from FoodInfo f where f.name like concat('%', :name, '%') and (f.foodUser = :userId or f.foodUser = 1) order by length(f.name) asc")
//    List<FoodInfo> findByNameAndFoodUser(String name, Long userId, Pageable pageable);


}