package com.ssafy.study.model;


import com.ssafy.study.dto.HotFeed;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="likes")

@SqlResultSetMapping(
        name="hotFeedMapping",
        classes={
                @ConstructorResult(
                        targetClass= HotFeed.class,
                        columns={
                                @ColumnResult(name="fid" , type =Long.class),
                                @ColumnResult(name="cnt", type = Integer.class)
                        }
                )
        }
)
@NamedNativeQuery(name="Like.findTopTenFeed",query = "SELECT l.feed_id as fid, count(l.member_id) as cnt FROM likes l JOIN feeds f ON f.id=l.feed_id WHERE f.regist_time >= :registTime GROUP BY l.feed_id ORDER BY cnt desc limit 10", resultSetMapping ="hotFeedMapping")

public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Member member;

    @OneToOne
    private Feed feed;
    
    public Like(Member member, Feed feed) {
    	this.member = member;
    	this.feed = feed;
    }
    
}
